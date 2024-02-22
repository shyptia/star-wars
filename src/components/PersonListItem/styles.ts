import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  personItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#51585e',
  },
  heartButton: {
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '600',
  },
  gender: {
    fontSize: 16,
    fontWeight: '500',
  },
});
