import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  safeAreaStyles: {
    flex: 1,
    backgroundColor: '#111827',
  },
  contentContainer: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  listContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#292F38',
    borderRadius: 20,
    paddingVertical: 10,
  },
  list: {
    width: '100%',
  },
  input: {
    width: '90%',
    marginVertical: 12,
    borderWidth: 1,
    borderColor: '#909aa3',
    borderRadius: 16,
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    backgroundColor: '#51585e',
  },
});
