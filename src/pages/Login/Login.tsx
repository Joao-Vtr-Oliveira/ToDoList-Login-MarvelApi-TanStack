import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
	Input,
	Button,
	useToast,
	Flex,
	Card,
	CardBody,
} from '@chakra-ui/react';
import { useLogin } from '../../utils/mutations';
import { useQueryClient } from '@tanstack/react-query';

const LoginPage = () => {
	const toast = useToast();
	const navigate = useNavigate();

	const [user, setUser] = useState('');
	const [password, setPassword] = useState('');

	const loginMutation = useLogin();
	const queryClient = useQueryClient();

	const handleLogin = async () => {
		let loadingToastId;
		const info = await loginMutation.mutateAsync({ user, password });
		queryClient.setQueryData(['login'], info);

		loadingToastId = toast({
			title: 'Carregando',
			description: 'Por favor, aguarde',
			status: 'info',
			duration: null,
			isClosable: false,
		});
		toast.close(loadingToastId);
		if (info?.sessionToken) {
			toast({
				title: 'Login concluído',
				description: 'Redirecionando',
				status: 'success',
				duration: 3000,
				isClosable: true,
			});
			navigate('/home');
		} else {
			if (loadingToastId) {
				toast.close(loadingToastId);
			}
			toast({
				title: 'Falha no login',
				description: 'Algo deu errado',
				status: 'error',
				duration: 5000,
				isClosable: true,
			});
		}
	};

	const handleUserChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		setUser(e.target.value);

	const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		setPassword(e.target.value);

	return (
		<Flex align='center' justifyContent='center' height='full' width='full'>
			<Card className='w-4/5 xl:w-2/5'>
				<CardBody>
					<Flex flexDirection='column' gap='10' padding='5'>
						<Input
							value={user}
							placeholder='Usuário'
							onChange={handleUserChange}
						/>
						<Input
							value={password}
							placeholder='Senha'
							onChange={handlePasswordChange}
							type='password'
						/>
						<Button onClick={handleLogin} isDisabled={!(!!user && !!password)}>
							Login
						</Button>
					</Flex>
				</CardBody>
			</Card>
		</Flex>
	);
};

export default LoginPage;
