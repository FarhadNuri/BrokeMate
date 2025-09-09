import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Ionicons } from '@expo/vector-icons';

export default function NotificationsScreen({ navigation }) {
  const [notifications, setNotifications] = useState([
    {
      id: '1',
      type: 'payment_reminder',
      title: 'Payment Reminder',
      time: '10:30 AM',
      icon: 'notifications-outline',
      section: 'today',
    },
    {
      id: '2',
      type: 'group_activity',
      title: 'Group Activity Update',
      time: '9:15 AM',
      icon: 'people-outline',
      section: 'today',
    },
    {
      id: '3',
      type: 'expense_shared',
      title: 'Expense Shared',
      time: '6:45 PM',
      icon: 'receipt-outline',
      section: 'yesterday',
    },
    {
      id: '4',
      type: 'payment_received',
      title: 'Payment Received',
      time: '2:20 PM',
      icon: 'cash-outline',
      section: 'yesterday',
    },
    {
      id: '5',
      type: 'group_activity',
      title: 'Group Activity Update',
      time: '11:00 AM',
      icon: 'people-outline',
      section: 'yesterday',
    },
  ]);

  const getNotificationsBySection = (section) => {
    return notifications.filter(notification => notification.section === section);
  };

  const clearNotification = (notificationId) => {
    setNotifications(prev => prev.filter(notification => notification.id !== notificationId));
  };

  const clearAllNotifications = () => {
    Alert.alert(
      'Clear All Notifications',
      'Are you sure you want to clear all notifications? This action cannot be undone.',
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Clear All', 
          style: 'destructive',
          onPress: () => setNotifications([])
        }
      ]
    );
  };

  const clearSectionNotifications = (section) => {
    const sectionName = section === 'today' ? 'Today' : 'Yesterday';
    Alert.alert(
      `Clear ${sectionName} Notifications`,
      `Are you sure you want to clear all ${sectionName.toLowerCase()} notifications?`,
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Clear', 
          style: 'destructive',
          onPress: () => setNotifications(prev => prev.filter(notification => notification.section !== section))
        }
      ]
    );
  };

  const renderNotificationItem = (notification) => (
    <View key={notification.id} style={styles.notificationItem}>
      <TouchableOpacity style={styles.notificationMain}>
        <View style={styles.notificationIcon}>
          <Ionicons name={notification.icon} size={wp('5%')} color="#6b7280" />
        </View>
        <View style={styles.notificationContent}>
          <Text style={styles.notificationTitle}>{notification.title}</Text>
          <Text style={styles.notificationTime}>{notification.time}</Text>
        </View>
        <Ionicons name="chevron-forward" size={wp('4%')} color="#9ca3af" />
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.clearButton}
        onPress={() => clearNotification(notification.id)}
      >
        <Ionicons name="close" size={wp('4.5%')} color="#ef4444" />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f8f9fa" />
      
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={wp('6%')} color="#1f2937" />
        </TouchableOpacity>
        <Text style={styles.title}>Notifications</Text>
        {notifications.length > 0 && (
          <TouchableOpacity 
            style={styles.clearAllButton}
            onPress={clearAllNotifications}
          >
            <Text style={styles.clearAllText}>Clear All</Text>
          </TouchableOpacity>
        )}
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {notifications.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Ionicons name="notifications-off-outline" size={wp('20%')} color="#9ca3af" />
            <Text style={styles.emptyTitle}>No notifications</Text>
            <Text style={styles.emptySubtitle}>You're all caught up!</Text>
          </View>
        ) : (
          <>
            {/* Today Section */}
            {getNotificationsBySection('today').length > 0 && (
              <View style={styles.section}>
                <View style={styles.sectionHeader}>
                  <Text style={styles.sectionTitle}>Today</Text>
                  <TouchableOpacity 
                    style={styles.clearSectionButton}
                    onPress={() => clearSectionNotifications('today')}
                  >
                    <Text style={styles.clearSectionText}>Clear</Text>
                  </TouchableOpacity>
                </View>
                {getNotificationsBySection('today').map(renderNotificationItem)}
              </View>
            )}

            {/* Yesterday Section */}
            {getNotificationsBySection('yesterday').length > 0 && (
              <View style={styles.section}>
                <View style={styles.sectionHeader}>
                  <Text style={styles.sectionTitle}>Yesterday</Text>
                  <TouchableOpacity 
                    style={styles.clearSectionButton}
                    onPress={() => clearSectionNotifications('yesterday')}
                  >
                    <Text style={styles.clearSectionText}>Clear</Text>
                  </TouchableOpacity>
                </View>
                {getNotificationsBySection('yesterday').map(renderNotificationItem)}
              </View>
            )}
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp('6%'),
    paddingVertical: hp('2%'),
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  backButton: {
    padding: wp('2%'),
  },
  title: {
    fontSize: wp('6%'),
    fontWeight: '600',
    color: '#1f2937',
  },
  clearAllButton: {
    paddingHorizontal: wp('3%'),
    paddingVertical: hp('1%'),
  },
  clearAllText: {
    fontSize: wp('4%'),
    fontWeight: '600',
    color: '#ef4444',
  },
  content: {
    flex: 1,
    paddingHorizontal: wp('6%'),
  },
  section: {
    marginTop: hp('3%'),
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp('2%'),
  },
  sectionTitle: {
    fontSize: wp('5%'),
    fontWeight: '600',
    color: '#1f2937',
  },
  clearSectionButton: {
    paddingHorizontal: wp('2%'),
    paddingVertical: hp('0.5%'),
  },
  clearSectionText: {
    fontSize: wp('3.8%'),
    fontWeight: '500',
    color: '#ef4444',
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: wp('3%'),
    marginBottom: hp('1.5%'),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  notificationMain: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp('4%'),
    paddingVertical: hp('2%'),
  },
  clearButton: {
    paddingHorizontal: wp('3%'),
    paddingVertical: hp('2%'),
    borderLeftWidth: 1,
    borderLeftColor: '#f3f4f6',
  },
  notificationIcon: {
    width: wp('10%'),
    height: wp('10%'),
    backgroundColor: '#f3f4f6',
    borderRadius: wp('5%'),
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: wp('4%'),
  },
  notificationContent: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: wp('4.5%'),
    fontWeight: '500',
    color: '#1f2937',
    marginBottom: hp('0.3%'),
  },
  notificationTime: {
    fontSize: wp('3.8%'),
    color: '#6b7280',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: hp('20%'),
    paddingHorizontal: wp('10%'),
  },
  emptyTitle: {
    fontSize: wp('6%'),
    fontWeight: '600',
    color: '#1f2937',
    marginTop: hp('3%'),
    marginBottom: hp('1%'),
  },
  emptySubtitle: {
    fontSize: wp('4%'),
    color: '#6b7280',
    textAlign: 'center',
    lineHeight: wp('6%'),
  },
});