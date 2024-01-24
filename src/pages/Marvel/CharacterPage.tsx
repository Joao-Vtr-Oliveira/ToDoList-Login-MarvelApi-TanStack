import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Flex,
	Heading,
	Text,
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useMarvelCharacter } from '../../utils/queries';

function CharacterPage() {
	const params = useParams();
	if (!params.character) return null;
	const character = useMarvelCharacter(params.character);

	const Accordions = () => {
		return (
			<Accordion w='100%' allowToggle textColor='white'>
				<AccordionItem>
					<h2>
						<AccordionButton>
							<Box as='span' flex='1' textAlign='center'>
								comics
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4}>
						{character.data?.data.results[0].comics && (
							<ul>
								{character.data?.data.results[0].comics.items.map((comic) => (
									<li key={comic.name}>{comic.name}</li>
								))}
							</ul>
						)}
					</AccordionPanel>
				</AccordionItem>
				<AccordionItem>
					<h2>
						<AccordionButton>
							<Box as='span' flex='1' textAlign='center'>
								series
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4}>
						{character.data?.data.results[0].series && (
							<ul>
								{character.data?.data.results[0].series.items.map((serie) => (
									<li key={serie.name}>{serie.name}</li>
								))}
							</ul>
						)}
					</AccordionPanel>
				</AccordionItem>
				<AccordionItem>
					<h2>
						<AccordionButton>
							<Box as='span' flex='1' textAlign='center'>
								stories
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4}>
						{character.data?.data.results[0].stories && (
							<ul>
								{character.data?.data.results[0].stories.items.map((story) => (
									<li key={story.name}>{story.name}</li>
								))}
							</ul>
						)}
					</AccordionPanel>
				</AccordionItem>
				<AccordionItem>
					<h2>
						<AccordionButton>
							<Box as='span' flex='1' textAlign='center'>
								events
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4}>
						{character.data?.data.results[0].events && (
							<ul>
								{character.data?.data.results[0].events.items.map((event) => (
									<li key={event.name}>{event.name}</li>
								))}
							</ul>
						)}
					</AccordionPanel>
				</AccordionItem>
			</Accordion>
		);
	};

	return (
		<Flex
			align='center'
			direction='column'
			justify='center'
			height='full'
			width='full'
			overflow='hidden'
		>
			<Card
				width='100%'
				maxW='1000px'
				height={{ base: '100vh', md: '90vh' }}
				overflowY='auto'
			>
				<CardHeader className='flex flex-col items-center justify-center'>
					<Heading>{character.data?.data.results[0].name}</Heading>
				</CardHeader>
				<CardBody borderRadius={6} className='flex flex-col items-center'>
					<img
						className='rounded w-4/5 xl:w-2/5'
						src={`${character.data?.data.results[0].thumbnail.path}/portrait_fantastic.${character.data?.data.results[0].thumbnail.extension}`}
						alt={character.data?.data.results[0].name}
					/>
					<Text textAlign='center' color='black'>
						{character.data?.data.results[0].description
							? character.data?.data.results[0].description
							: ''}
					</Text>
				</CardBody>
				<CardFooter
					bg='black'
					textColor='white'
					className='flex items-center justify-center'
				>
					<Accordions />
				</CardFooter>
			</Card>
		</Flex>
	);
}

export default CharacterPage;
