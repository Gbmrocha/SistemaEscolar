import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Box,
    Flex,
    Button,
    Radio,
    RadioGroup,
    HStack
} from '@chakra-ui/react'

export default function CadastroAlunos(){
    return(
        <>
            <Box m={8}>
                <FormControl isRequired>
                    <FormLabel htmlFor='first-name'>First name</FormLabel>
                    <Input id='first-name' placeholder='First name' mb={3}/>
                    <FormLabel htmlFor='last-name'>Last name</FormLabel>
                    <Input id='last-name' placeholder='Last name' mb={3}/>
                    <FormLabel as='legend'>Sex</FormLabel>
                        <RadioGroup defaultValue=''mb={3}>
                            <HStack spacing='24px'>
                                <Radio value='Male'>Male</Radio>
                                <Radio value='Female'>Female</Radio>
                                <Radio value='Other'>Other</Radio>
                            </HStack>
                        </RadioGroup>
                    <FormLabel htmlFor='email'>Email</FormLabel>
                    <Input id='email' placeholder='Email' mb={3}/>

                    <FormLabel htmlFor='father-name'>Father name</FormLabel>
                    <Input id='father-name' placeholder='Father name' mb={3}/>
                    <FormLabel htmlFor='mother-name'>Mother name</FormLabel>
                    <Input id='mother-name' placeholder='Mother name' mb={3}/>
                    
                    <Button mt={6} colorScheme='teal' type='submit'>Submit</Button>
                </FormControl>
            </Box>
        </>
    )
}