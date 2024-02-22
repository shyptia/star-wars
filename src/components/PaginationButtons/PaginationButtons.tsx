import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {LeftArrowSvg, RightArrowSvg} from './ArrowsSvgs';

export function PaginationButtons({
  totalAmountPage,
  currentPage,
  itemsPerPage,
  onPageChange,
}: {
  totalAmountPage: number;
  currentPage: number;
  itemsPerPage: number;
  onPageChange: React.Dispatch<React.SetStateAction<number>>;
}) {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage * itemsPerPage >= totalAmountPage;
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalAmountPage);

  return (
    <View style={styles.navigationButtonsContainer}>
      <TouchableOpacity
        disabled={isFirstPage}
        onPress={() => onPageChange(page => page - 1)}>
        <LeftArrowSvg color={isFirstPage ? '#51585e' : '#FFFFFF'} />
      </TouchableOpacity>

      <Text style={styles.pages}>
        {`${
          totalAmountPage ? `${startItem}-${endItem}` : '0'
        } of ${totalAmountPage}`}
      </Text>

      <TouchableOpacity
        disabled={isLastPage}
        onPress={() => onPageChange(page => page + 1)}
        style={[]}>
        <RightArrowSvg color={isLastPage ? '#51585e' : '#FFFFFF'} />
      </TouchableOpacity>
    </View>
  );
}
