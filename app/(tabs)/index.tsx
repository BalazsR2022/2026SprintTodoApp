import GradientBackground from '@/components/GradientBackground';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";

export default function Home() {
  const router = useRouter();

  return (
    <View style={{ flex: 1 }}>
      <GradientBackground />

      <Image
        source={require("../../assets/images/catUser.png")}
        style={{ width: 200, height: 200, alignSelf: "center", marginTop: 50, borderRadius: 90, overflow: 'hidden' }}
      />

      {/* Gombok gradient háttérrel és térrel a közöttük */}
      <View style={{ paddingHorizontal: 16, marginTop: 20, gap: 12 }}>
        <LinearGradient colors={['#bcb0c7ff', '#867a9cff']} style={{ width: '100%', borderRadius: 8, padding: 0, marginVertical: 6 }}>
          <Pressable
            onPress={() => router.push("/todo")}
            style={({ pressed }) => ({
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              paddingVertical: 14,
              opacity: pressed ? 0.8 : 1,
            })}
          >
            <Text style={{ fontSize: 30, textAlign: 'center', color: '#fff', fontWeight: '600', paddingVertical: 0, paddingHorizontal: 22 }}>
              TODO
            </Text>
          </Pressable>
        </LinearGradient>

        <LinearGradient colors={['#bcb0c7ff', '#867a9cff']} style={{ width: '100%', borderRadius: 8, padding: 0, marginVertical: 6 }}>
          <Pressable
            onPress={() => router.push("/sikerek")}
            style={({ pressed }) => ({
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              paddingVertical: 14,
              opacity: pressed ? 0.8 : 1,
            })}
          >
            <Text style={{ fontSize: 30, textAlign: 'center', color: '#fff', fontWeight: '600', paddingVertical: 0, paddingHorizontal: 22 }}>
              SIKEREK
            </Text>
          </Pressable>
        </LinearGradient>

        <LinearGradient colors={['#bcb0c7ff', '#867a9cff']} style={{ width: '100%', borderRadius: 8, padding: 0, marginVertical: 6 }}>
          <Pressable
            onPress={() => router.push("/programok")}
            style={({ pressed }) => ({
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              paddingVertical: 14,
              opacity: pressed ? 0.8 : 1,
            })}
          >
            <Text style={{ fontSize: 30, textAlign: 'center', color: '#fff', fontWeight: '600', paddingVertical: 0, paddingHorizontal: 22 }}>
              PROGRAMOK
            </Text>
          </Pressable>
        </LinearGradient>
      </View>
    </View>
  );
}