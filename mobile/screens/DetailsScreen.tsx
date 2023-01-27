import * as React from "react";
import {
   StyleSheet,
   Text,
   View,
   Image,
   ScrollView,
   TouchableOpacity,
} from "react-native";
import { Button, Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";

const DetailsScreen = ({ navigation }: any) => {
   const navi = useNavigation();

   React.useLayoutEffect(() => {
      navi.setOptions({
         headerShown: false,
      });
   });

   return (
      <ScrollView className="bg-dark w-full h-screen ">
         <View className=" relative h-full w-full flex items-center py-10">
            <Image
               source={{
                  uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5sLgseJtBTleFdTJdNZ0crrvmIYNbHleJUTLBC1KkRQ&s",
               }}
               className="w-full  h-screen  rounded"
            />
            <View className={"absolute  top-14 left-2"}>
               <TouchableOpacity
                  onPress={() => {
                     navigation.navigate("Home");
                     // setIsVisible(true);
                  }}
               >
                  <Icon
                     name={"arrow-left"}
                     type={"feather"}
                     style={{ marginLeft: 16 }}
                     color={"#FAFAFA"}
                  />
               </TouchableOpacity>
            </View>
         </View>
         <View className=" absolute  bottom-60 left-4">
            <Text className=" text-light text-5xl font-semibold">
               Hello World
            </Text>
            <Text className=" text-mid text-base pr-5">
               Lorem Ipsum is simply dummy text of the printing and typesetting
               industry. Lorem Ipsum has been the industry's standard dummy text
               ever since the 1500s
            </Text>
            <View className="flex flex-row">
               <Button
                  title={"Play"}
                  containerStyle={{
                     width: 100,
                     padding: 10,
                     borderRadius: 5,
                  }}
                  buttonStyle={{
                     backgroundColor: "#22C55E",
                     borderRadius: 5,
                  }}
               />
               <Button
                  title={"Save"}
                  type="outline"
                  titleStyle={{ color: "#FAFAFA" }}
                  containerStyle={{
                     width: 100,
                     padding: 10,
                     borderRadius: 5,
                  }}
                  buttonStyle={{
                     borderColor: "#22C55E",
                     borderRadius: 5,
                     borderWidth: 1,
                  }}
               />
            </View>
         </View>
      </ScrollView>
   );
};

export default DetailsScreen;

