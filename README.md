# RN specific setup steps


## USAGE

1. install package
```
yarn add @dasubh/nxmobile
```

2. Install Peer Deps
```
yarn add @react-native-masked-view/masked-view react-native-svg react-native-video react-native-youtube
```

3. EXPO dependencies

**How to install if you are a EXPO managed app**

```
expo install expo-file-system
expo install expo-linear-gradient
```

***How to install if you are a RNCLI app**

[EXPO docs](https://docs.expo.dev/bare/installing-expo-modules/)
```
npx install-expo-modules@45.0.0
expo install expo-file-system
expo install expo-linear-gradient
```

4. RUNNING your APP

**IOS**
```
cd ios && pod install
yarn ios # or which ever script runs your IOS app
```

**ANDROID**

To avoid getting the below error
```
Could not find com.yqritc:android-scalablevideoview:1.0.4.
		 Required by:
		         project :react-native-video
```
add the following in `android/build.gradle`

```
jcenter() {
  content {
		includeModule("com.yqritc", "android-scalablevideoview")
	}
}
```

Then run your android script.