import { Tabs } from "expo-router";
import { FontAwesome5 } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#247CFF',
        tabBarInactiveTintColor: '#9E9E9E',
        tabBarStyle: {
          paddingBottom: 5,
          paddingTop: 5,
          height: 60,
        }
      }}
    >
      <Tabs.Screen
        name="home/home"
        options={{
          title: "Trang chủ",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="home" size={20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="notifications/notifications"
        options={{
          title: "Thông báo",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="bell" size={20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="appointments/appointments"
        options={{
          title: "Lịch hẹn",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="calendar-alt" size={20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="medical-records/medical-records"
        options={{
          title: "Bệnh án",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="file-medical" size={20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile/profile"
        options={{
          title: "Cá nhân",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user" size={20} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}