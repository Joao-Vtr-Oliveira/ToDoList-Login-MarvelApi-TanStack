import { useMutation } from '@tanstack/react-query';
import { login } from './loginapi';

export const useLogin = () =>
	useMutation({
		mutationKey: ['login'],
		mutationFn: login,
	});
