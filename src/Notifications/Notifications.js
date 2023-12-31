import PushNotification from "react-native-push-notification";

export const ScheduledNotification = async () => {
  try {
    PushNotification.localNotificationSchedule({
      channelId: 'channel-id',
      title: 'Check Out!!',
      message: 'explore our app to find amazing products and grab the work opportunity',
      date: new Date(Date.now()),
      allowWhileIdle: true,
      repeatType: 'day',
      repeatTime:  10 * 60 * 60 * 1000, 
    });
  } catch (error) {
    console.warn('Permission denied or error:', error);
  }
};
export const ScheduleduploadNotification = async () => {
  try {
    PushNotification.localNotificationSchedule({
      channelId: 'channel-id',
      title: 'Tried Uploading Something ??',
      message: 'If not, upload your products and work details on ReviveX. someone might be looking for it.',
      date: new Date(Date.now()),
      allowWhileIdle: true,
      repeatType: 'day',
      repeatTime:  2*24 * 60 * 60 * 1000, 
    });
  } catch (error) {
    console.warn('Permission denied or error:', error);
  }
};

export const ProductDeleteNotification = async () => {
  try {
    PushNotification.localNotificationSchedule({
    channelId: 'channel-id',
    title: "Attention User!! ", 
    message: "If your product is sold please delete the data", 
    date: new Date(Date.now()),
      allowWhileIdle: true,
    repeatType: "day",
    repeatTime: 3*24 * 60 * 60 * 1000,
  });
  } catch (error) {
    console.warn('Permission denied or error:', error);
  }
};
export const WorkDeleteNotification = async () => {
  try {
    PushNotification.localNotificationSchedule({
    channelId: 'channel-id',
    title: "Attention User!!", 
    message: "If your job is done please delete the data", 
    date: new Date(Date.now()),
      allowWhileIdle: true,
    repeatType: "day",
    repeatTime: 3*24 * 60 * 60 * 1000,
  });
  } catch (error) {
    console.warn('Permission denied or error:', error);
  }
};

export const CancelAllNotifications = () => {
  PushNotification.cancelAllLocalNotifications();
};