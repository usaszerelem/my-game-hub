import {
    Button,
    HStack,
    Heading,
    Image,
    List,
    ListItem,
    Spinner,
} from "@chakra-ui/react";

import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import Genre from "../entities/Genre";

interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenreId?: number;
}

const GenreList = ({ selectedGenreId, onSelectGenre }: Props) => {
    const { data, isLoading, error } = useGenres();

    if (error) return null;
    if (isLoading) return <Spinner />;

    return (
        <>
            <Heading fontSize="2xl" marginBottom={3}>
                Genres
            </Heading>
            <List>
                {data?.results.map((genre) => (
                    <ListItem key={genre.id} paddingY={1}>
                        <HStack>
                            <Image
                                boxSize="32px"
                                borderRadius={8}
                                objectFit="cover"
                                src={getCroppedImageUrl(genre.image_background)}
                            />
                            <Button
                                whiteSpace="normal"
                                textAlign="left"
                                fontSize="lg"
                                variant="link"
                                fontWeight={
                                    genre.id === selectedGenreId
                                        ? "bold"
                                        : "normal"
                                }
                                onClick={() => onSelectGenre(genre)}
                            >
                                {genre.name}
                            </Button>
                        </HStack>
                    </ListItem>
                ))}
            </List>
        </>
    );
};

export default GenreList;
