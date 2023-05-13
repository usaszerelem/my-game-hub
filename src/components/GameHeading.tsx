import { Heading } from "@chakra-ui/react";
import useGameQueryStore from "../store";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";

const GameHeading = () => {
    const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
    const platform = usePlatform(platformId);

    const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
    const genre = useGenre(genreId);

    const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

    return (
        <Heading as="h1" marginY={5}>
            {heading}
        </Heading>
    );
};

export default GameHeading;
