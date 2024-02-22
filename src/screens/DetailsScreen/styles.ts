import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111827',
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 40,
  },
  header: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 30,
  },
  button: {
    marginTop: 30,
    paddingHorizontal: 30,
    paddingVertical: 10,
    backgroundColor: '#87bad6',
    borderRadius: 16,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111827',
  },
});
