
import LibraryTab from "@/components/tabs/Library";
import LikedTab from "@/components/tabs/LikedTab";
import SuggestedTab from "@/components/tabs/SuggestedTab";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

export default function() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Suggested" component={SuggestedTab} />
      <Tab.Screen name="Liked" component={LikedTab} />
      <Tab.Screen name="Library" component={LibraryTab} />
    </Tab.Navigator>
  );
}
