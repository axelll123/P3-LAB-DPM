import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#000', // Latar belakang hitam
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#39ff14', // Hijau neon
    marginBottom: 20,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    color: '#39ff14', // Hijau neon
  },
  button: {
    backgroundColor: '#39ff14', // Hijau neon
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000', // Teks hitam di atas tombol hijau neon
  },
  input: {
    borderColor: '#39ff14', // Hijau neon
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    marginVertical: 10,
    color: '#39ff14', // Teks hijau neon
    backgroundColor: '#222', // Hitam gelap
  },
});
