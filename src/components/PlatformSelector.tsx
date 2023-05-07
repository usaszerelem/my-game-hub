import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import Platform from "../entities/Platform";
import usePlatform from "../hooks/usePlatform";

interface Props {
    selectedPlatformId?: number;
    onSelectedPlatform: (platform: Platform) => void;
}

const PlatformSelector = ({
    selectedPlatformId,
    onSelectedPlatform,
}: Props) => {
    const { data, error } = usePlatforms();
    const selectedPlatform = usePlatform(selectedPlatformId);

    if (error) return null;

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                {selectedPlatform?.name || "Platform"}
            </MenuButton>
            <MenuList>
                {data?.results.map((platform) => (
                    <MenuItem
                        key={platform.id}
                        onClick={() => onSelectedPlatform(platform)}
                    >
                        {platform.name}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
};

export default PlatformSelector;
