import React from "react";
import {
    Container,
    Header,
    Title,
    Content,
    Text,
    Left,
    Right,
    Body,
	Spinner,
	View,
	Label,
    Thumbnail
} from "native-base";
import styles from "../styles";
import { GithubUser } from "../../types/types";
export interface Props {
    navigation: any;
    route: { [key:string]: any; user: GithubUser };
}
export interface State {
    user: GithubUser;
    loading: boolean;
}
export default class UserContainer extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            user: {} as GithubUser,
            loading: true,
        };
    }

    componentDidMount() {
		this.setState({ user: this.props.route.user, loading: false })
	}

    render() {
		if (this.state.loading) return (<Spinner />)
        return (
            <Container style={styles.container}>
                <Header style={{ backgroundColor: "black" }}>
                    <Header>
                        <Left />
                        <Body style={{ flex: 3 }}>
                            <Title>{"Home"}</Title>
                        </Body>

                        <Right />
                    </Header>
                </Header>

                <Content padder>
                    <View style={{ flexDirection: 'column', flex: 3 }}>
                        <View>
                            <Thumbnail
                                size={150}
                                circular
                                resizeMode={"contain"}
                                source={{
                                    uri: this.state.user.avatar_url,
                                }}
                            />
                        </View>
						<View style={{ flexDirection: 'row' }}>
								<Text>{this.state.user.name}</Text>
								<Label>{this.state.user.location}</Label>
						</View>
                    </View>
                </Content>
            </Container>
        );
    }
}
