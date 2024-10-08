import { Box, Heading, HStack, Image, Stack, Text } from "@chakra-ui/react"
import CarouselSlider from "../../components/slider"
import { Color, Shadow } from "../../styles/styles"
import { useEffect } from "react"
import { changeTabTitle } from "../../utils/changeTabTitle"

const OurServicesPage = () => {
    const imageList: string[] = [

    ]

    useEffect(() => {
        changeTabTitle('Dịch vụ');
    }, []);

    return (
        <>
            <Box pos={'relative'} mb={48}>
                <CarouselSlider imageList={imageList} />
                <Stack
                    align={'center'}
                    pos={'absolute'}
                    w={'5xl'}
                    px={28}
                    pb={16}
                    pt={8}
                    left="50%"
                    transform="translate(-50%, 0)"
                    bottom={-48}
                    bg={Color.lightBlue}
                    borderRadius={5}
                    shadow={Shadow.cardShadow}
                    gap={6}
                >
                    <Heading fontSize={55}>Dịch vụ của chúng tôi</Heading>
                    <Text textAlign={'justify'}>
                        Là một trong những nhà tổ chức tiệc cưới chuyên nghiệp và cao cấp đầu tiên có trụ sở tại Việt Nam,
                        OpalWed chuyên tư vấn, thiết kế, lập kế hoạch và thực hiện tiệc cưới trọn gói.
                    </Text>
                </Stack>
            </Box>
            <Stack w={'5xl'} mx={'auto'} my={16} gap={24}>
                <HStack justify={'space-between'} gap={20}>
                    <Image
                        src="./image 18.png"
                        alt="Wedding"
                        borderRadius="md"
                        objectFit="cover"
                        h="450px"
                        flex={1}
                    />
                    <Stack flex={2} px={16} py={10} align={'center'} bg={Color.lightYellow} gap={8}>
                        <Heading fontSize={30}>Tổ chức tiệc cưới</Heading>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac dignissim leo. Cras in velit tristique lectus dignissim bibendum fermentum sit amet leo. Etiam vulputate, purus in porta convallis, urna est hendrerit felis, id lobortis leo dui cursus lacus. Vivamus ac tristique eros, vel egestas augue. Etiam eu ultricies risus. Nam imperdiet sapien lacus, eu lobortis diam laoreet id. Curabitur sodales hendrerit urna, sed efficitur sem dictum vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut ut volutpat mi, et porttitor justo. Fusce eu velit vel quam ultrices tristique.
                        </Text>
                    </Stack>
                </HStack>
                <HStack justify={'space-between'} gap={20}>
                    <Stack flex={2} px={16} py={10} align={'center'} bg={Color.lightYellow} gap={8}>
                        <Heading fontSize={30}>So sánh & chọn nhà cung cấp</Heading>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac dignissim leo. Cras in velit tristique lectus dignissim bibendum fermentum sit amet leo. Etiam vulputate, purus in porta convallis, urna est hendrerit felis, id lobortis leo dui cursus lacus. Vivamus ac tristique eros, vel egestas augue. Etiam eu ultricies risus. Nam imperdiet sapien lacus, eu lobortis diam laoreet id. Curabitur sodales hendrerit urna, sed efficitur sem dictum vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut ut volutpat mi, et porttitor justo. Fusce eu velit vel quam ultrices tristique.
                        </Text>
                    </Stack>
                    <Image
                        src="./image 18.png"
                        alt="Wedding"
                        borderRadius="md"
                        objectFit="cover"
                        h="450px"
                        flex={1}
                    />
                </HStack>
                <HStack justify={'space-between'} gap={20}>
                    <Image
                        src="./image 18.png"
                        alt="Wedding"
                        borderRadius="md"
                        objectFit="cover"
                        h="450px"
                        flex={1}
                    />
                    <Stack flex={2} px={16} py={10} align={'center'} bg={Color.lightYellow} gap={8}>
                        <Heading fontSize={30}>Tư vấn tiệc cưới</Heading>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac dignissim leo. Cras in velit tristique lectus dignissim bibendum fermentum sit amet leo. Etiam vulputate, purus in porta convallis, urna est hendrerit felis, id lobortis leo dui cursus lacus. Vivamus ac tristique eros, vel egestas augue. Etiam eu ultricies risus. Nam imperdiet sapien lacus, eu lobortis diam laoreet id. Curabitur sodales hendrerit urna, sed efficitur sem dictum vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut ut volutpat mi, et porttitor justo. Fusce eu velit vel quam ultrices tristique.
                        </Text>
                    </Stack>
                </HStack>
            </Stack>
        </>
    )
}

export default OurServicesPage