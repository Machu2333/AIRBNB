import { FlatList, View, StyleSheet, StatusBar, Text, ScrollView, TouchableOpacity } from 'react-native';
import React, { useMemo, useState } from 'react';
// import ListingsBottomSheet from '@/components/ListingsBottomSheet';
import listingsData from '@/assets/data/airbnb-listings.json';
import ListingsMap from '@/components/ListingsMap';
import listingsDataGeo from '@/assets/data/airbnb-listings.geo.json';
import { Stack } from 'expo-router';
import ExploreHeader from '@/components/ExploreHeader';
import Listings from '@/components/Listings';

const Page = () => {
  const items = useMemo(() => listingsData as any, []);
  // const getoItems = useMemo(() => listingsDataGeo, []);
  const [category, setCategory] = useState<string>('Tiny homes');

  const onDataChanged = (category: string) => {
    setCategory(category);
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Define pour custom header */}
      <Stack.Screen
        options={{
          header: () => <ExploreHeader onCategoryChanged={onDataChanged} />,
        }}
      />
      <ListingsMap listings={listingsDataGeo} />
      {/* <ListingsBottomSheet listings={items} category={category} /> */}
    </View>
  );
};

export default Page;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },


});