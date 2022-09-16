import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import ExpensesItem from "./ExpensesItem";

function renderExpensesItem(itemData) {
  return <ExpensesItem {...itemData.item} />;
}

export default function ExpensesList({ expenses }) {
  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={expenses}
      renderItem={renderExpensesItem}
    />
  );
}

const styles = StyleSheet.create({});
