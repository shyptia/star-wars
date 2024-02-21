import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  box: {
    flex: 1,
    height: 80,
    backgroundColor: '#292F38',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  count: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 5,
  },
  description: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '500',
  },
});
