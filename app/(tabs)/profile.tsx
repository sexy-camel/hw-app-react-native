import { StyleSheet, Image, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function ProfileScreen() {
  return (
    <ThemedView style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={require('@/assets/images/icon.png')}
          style={styles.profileImage}
        />
        <ThemedText type="title" style={styles.username}>홍길동</ThemedText>
        <ThemedText style={styles.userInfo}>개발자</ThemedText>
      </View>
      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <ThemedText type="defaultSemiBold">게시물</ThemedText>
          <ThemedText>10</ThemedText>
        </View>
        <View style={styles.statItem}>
          <ThemedText type="defaultSemiBold">팔로워</ThemedText>
          <ThemedText>100</ThemedText>
        </View>
        <View style={styles.statItem}>
          <ThemedText type="defaultSemiBold">팔로잉</ThemedText>
          <ThemedText>50</ThemedText>
        </View>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
  },
  username: {
    fontSize: 24,
    marginBottom: 8,
  },
  userInfo: {
    fontSize: 16,
    opacity: 0.7,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
    paddingVertical: 20,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  statItem: {
    alignItems: 'center',
  },
}); 