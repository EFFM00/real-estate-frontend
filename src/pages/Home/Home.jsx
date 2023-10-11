import { Button, H1, HomeCont, LinkStyle, P } from "./style";

const Home = () => {
    return (
        <HomeCont>
            <H1>Welcome to Dream Homes Realty</H1>
            <Button>
                <LinkStyle to="/login">
                    Let's go
                </LinkStyle>
            </Button>
            <P>By: Elena Fischietto</P>
        </HomeCont>
    )
}

export default Home;