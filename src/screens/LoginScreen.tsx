import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Colors from "../constants/Colors";
import { useWarmUpBrowser } from "../hooks/warmUpBrowser";
import { useOAuth } from "@clerk/clerk-expo";
import * as WebBrowser from "expo-web-browser";
 
WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
    useWarmUpBrowser();
    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
    const onPress = React.useCallback(async () => {
      try {
        const { createdSessionId, signIn, signUp, setActive } =
          await startOAuthFlow();
   
        if (createdSessionId) {
          setActive({ session: createdSessionId });
        } else {
          // Use signIn or signUp for next steps such as MFA
        }
      } catch (err) {
        console.error("OAuth error", err);
      }
    }, []);
   
    return (
        <View style={styles.mainContainer}>
            <Image
                source={require("../../assets/images/img1.png")}
                style={styles.heroImage}
            />
            <View style={styles.bottomContainer}>
                <Text style={styles.title}>CodeBox</Text>
                <Text style={styles.subtTitle}>
                    Your Ultimate Programming Learning Box
                </Text>
                <TouchableOpacity style={styles.btnContainer} onPress={onPress}>
                    <Image 
                        source={require("../../assets/images/google_icon.png")}
                        style={styles.googleIcon}
                    />
                    <Text style={styles.btnText}>Sign in with Google</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
    },
    heroImage: {
        width: 250,
        height: 500,
        objectFit: "contain",
        marginTop: 50,
    },
    bottomContainer: {
        height: 400,
        backgroundColor: Colors.PRIMARY,
        width: "100%",
        marginTop: -80,
        padding: 20,
    },
    title: {
        textAlign: "center",
        fontSize: 35,
        fontFamily: "Outfit-Bold",
        color: Colors.WHITE,
        marginTop: 20
    },
    subtTitle: {
        textAlign: "center",
        fontSize: 20,
        marginTop: 20,
        color: Colors.LIGHT_PRIMARY,
        fontFamily: "Outfit-Regular",
    },
    btnContainer: {
        backgroundColor: Colors.WHITE,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        borderRadius: 50,
        marginTop: 25,

    },
    googleIcon: {
        width: 40,
        height: 40,
        marginRight: 4,
    },
    btnText: {
        fontSize: 20,
        color: Colors.PRIMARY,
        fontFamily: "Outfit-SemiBold",
        marginLeft: 4,
    }
});
