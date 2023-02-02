import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ListItem, Avatar } from "@rneui/themed";

const CustomListItem = ({ id, chatName, enterChat }: any) => {
   return (
      <ListItem>
         <Avatar
            rounded
            source={{
               uri: "data:image/jpeg;base64,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",
            }}
         />
         <ListItem.Content>
            <ListItem.Title style={{ fontWeight: "800" }}>You</ListItem.Title>
            <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
               This a subtile
            </ListItem.Subtitle>
         </ListItem.Content>
      </ListItem>
   );
};

export default CustomListItem;

const styles = StyleSheet.create({});
