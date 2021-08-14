import React from "react";
import {
    Container,
    Header,
    Title,
    Content,
    Text,
    Button,
    Left,
    Right,
    Body,
    Spinner,
	View,
} from "native-base";
import styles from "../styles";
import { getUsers } from "../../api/get";
import { GithubUser } from "../../types/types";
export interface Props {
    navigation: any;
    valid: boolean;
}
export interface State {
    users: GithubUser[];
    loading: boolean;
}
class HomeContainer extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            loading: true,
        };
    }

    componentDidMount() {
        getUsers().then((users) => {
			const firstUsers = users.slice(0, 4);
			this.setState({ users: firstUsers, loading: false });
		});
    }

    render() {
        if (this.state.loading) return <Spinner />;
        return (
            <Container style={styles.container}>
                <Header style={{ backgroundColor: "black" }}>
                    <Left />
                    <Body style={{ flex: 3 }}>
                        <Title>{"Home"}</Title>
                    </Body>

                    <Right />
                </Header>
                <Content padder>
                    <Title>Top 5 Github Users</Title>
                    <Text>Tap the username to see more information</Text>
                    <View>
                        {this.state.users.map((user) => (
                            <Button
                                primary
                                key={user.id}
								style={{ flex: 1 }}
                                onPress={this.props.navigation.navigate("User", { user })}
                            >
                                {user.login}
                            </Button>
                        ))}
                    </View>
                </Content>
            </Container>
        );
    }
}
export default HomeContainer;
