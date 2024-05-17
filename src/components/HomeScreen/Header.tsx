import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import Colors from "../../constants/Colors";
import { useUser } from "@clerk/clerk-expo";
import { Ionicons } from '@expo/vector-icons';

export default function Header() {
    const { isLoaded, isSignedIn, user } = useUser();

    return (
        isLoaded && (
            <View style={styles.header__mainContainer}>
                <View
                    style={[{ justifyContent: "space-between" }, styles.header__rowStyle]}
                >
                    <View style={styles.header__rowStyle}>
                        <Image
                            source={{ uri: user?.imageUrl }}
                            style={styles.header__userProfile}
                        />
                        <View>
                            <Text style={styles.header__welcomeText}>Welcome,</Text>
                            <Text style={styles.header__userName}>{user?.fullName}</Text>
                        </View>
                    </View>
                    <View style={styles.header__rowStyle}>
                        <Image
                            source={require("../../../assets/images/coin.png")}
                            style={styles.header__coinImage}
                        />
                        <Text style={styles.header__userPoints}>3580</Text>
                    </View>
                </View>
                <View style={styles.header__inputContainer}>
                    <TextInput placeholder="Search courses" style={styles.header__input} />
                    <Ionicons name="search-circle" size={50} color={Colors.PRIMARY} />
                </View>
            </View>
        )
    );
}

const styles = StyleSheet.create({
    header__mainContainer: {
        padding: 20,
    },
    header__userProfile: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    header__welcomeText: {
        color: Colors.WHITE,
        fontFamily: "Outfit-Regular",
    },
    header__userName: {
        color: Colors.WHITE,
        fontSize: 20,
        fontFamily: "Outfit-Bold",
    },
    header__rowStyle: {
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
    },
    header__coinImage: {
        width: 35,
        height: 35,
    },
    header__userPoints: {
        color: Colors.WHITE,
        fontSize: 20,
        fontFamily: "Outfit-Bold",
    },
    header__inputContainer: {
        backgroundColor: Colors.WHITE,
        paddingLeft: 20,
        paddingRight: 5,
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        borderRadius: 50,
        marginTop: 25
    },
    header__input: {
        width: "80%",
        fontFamily: "Outfit-Regular",
        fontSize: 18,
    }
});
