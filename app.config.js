module.exports = {
  expo: {
    name: 'hw-app',
    slug: 'hw-app',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/images/icon.png',
    scheme: 'myapp',
    userInterfaceStyle: 'automatic',
    newArchEnabled: true,
    splash: {
      image: './assets/images/splash-icon.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff'
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
      bundleIdentifier: 'com.sexy-camel.hwapp',
      config: {
        naverMap: {
          clientId: '9csre3lzlx',
          clientSecret: 'tPMDmAy3fQYaBUc8wWnFt2EcKKuglWhGuNPITnp8'
        }
      }
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/images/adaptive-icon.png',
        backgroundColor: '#ffffff'
      },
      package: 'com.sexy-camel.hwapp',
      config: {
        naverMap: {
          clientId: '9csre3lzlx',
          clientSecret: 'tPMDmAy3fQYaBUc8wWnFt2EcKKuglWhGuNPITnp8'
        }
      }
    },
    web: {
      bundler: 'metro',
      output: 'static',
      favicon: './assets/images/favicon.png'
    },
    plugins: [
      'expo-router',
      [
        'expo-splash-screen',
        {
          image: './assets/images/splash-icon.png',
          imageWidth: 200,
          resizeMode: 'contain',
          backgroundColor: '#ffffff'
        }
      ]
    ],
    experiments: {
      typedRoutes: true
    }
  }
}; 