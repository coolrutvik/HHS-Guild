import React, { useState } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';

interface DateTimeFieldProps {
  label: string;
  value: Date;
  onChange: (date: Date) => void;
  minimumDate?: Date;
}

const DateTimeField = ({
  label,
  value,
  onChange,
  minimumDate,
}: DateTimeFieldProps) => {
  const [showDate, setShowDate] = useState(false);
  const [showTime, setShowTime] = useState(false);

  const handleDateChange = (
    event: DateTimePickerEvent,
    selectedDate?: Date,
  ) => {
    setShowDate(false);

    if (event.type === 'dismissed' || !selectedDate) {
      return;
    }

    const updated = new Date(value);

    updated.setFullYear(selectedDate.getFullYear());
    updated.setMonth(selectedDate.getMonth());
    updated.setDate(selectedDate.getDate());

    onChange(updated);

    if (Platform.OS === 'android') {
      setShowTime(true);
    }
  };

  const handleTimeChange = (
    event: DateTimePickerEvent,
    selectedTime?: Date,
  ) => {
    setShowTime(false);

    if (event.type === 'dismissed' || !selectedTime) {
      return;
    }

    const updated = new Date(value);

    updated.setHours(selectedTime.getHours());
    updated.setMinutes(selectedTime.getMinutes());

    onChange(updated);
  };

  const formattedDate = value.toLocaleString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <TouchableOpacity
        style={styles.field}
        onPress={() => setShowDate(true)}
      >
        <Text style={styles.icon}>📅</Text>

        <Text style={styles.value}>
          {formattedDate}
        </Text>
      </TouchableOpacity>

      {showDate && (
        <DateTimePicker
          value={value}
          mode="date"
          display="default"
          minimumDate={minimumDate}
          onChange={handleDateChange}
        />
      )}

      {showTime && (
        <DateTimePicker
          value={value}
          mode="time"
          display="default"
          onChange={handleTimeChange}
        />
      )}
    </View>
  );
};

export default DateTimeField;

const styles = StyleSheet.create({
  container: {
    marginBottom: 18,
  },

  label: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 8,
  },

  field: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1F2937',
    borderRadius: 14,
    paddingVertical: 15,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#374151',
  },

  icon: {
    fontSize: 18,
    marginRight: 10,
  },

  value: {
    color: '#FFFFFF',
    fontSize: 16,
    flex: 1,
  },
});