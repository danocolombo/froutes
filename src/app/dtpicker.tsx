import { Pressable, StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { SafeAreaView } from 'react-native-safe-area-context';

const TestScreen = () => {
    const [selectedDate, setSelectedDate] = useState(() => {
        const today = new Date();
        return new Date(
            Date.UTC(
                today.getUTCFullYear(),
                today.getUTCMonth(),
                today.getUTCDate()
            )
        );
    });
    const [datePickerVisible, setDatePickerVisible] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisible(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisible(false);
    };

    const handleConfirm = (date) => {
        const utcDate = new Date(
            Date.UTC(
                date.getUTCFullYear(),
                date.getUTCMonth(),
                date.getUTCDate()
            )
        );
        setSelectedDate(utcDate);
        hideDatePicker();
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.intro}>
                <Text style={styles.title}>Date/Time Picker Example</Text>
            </View>

            <View
                style={{
                    padding: 20,
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Text
                    style={{
                        fontSize: 24,
                        fontWeight: 'bold',
                        marginBottom: 20,
                    }}
                >
                    {selectedDate
                        ? selectedDate.toLocaleDateString()
                        : 'No date selected'}
                </Text>
                <Button title='Select a date' onPress={showDatePicker} />
            </View>
            <DateTimePickerModal
                date={selectedDate}
                isVisible={datePickerVisible}
                mode='date'
                display='inline'
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
        </SafeAreaView>
    );
};

export default TestScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    intro: {
        marginHorizontal: 10,
    },
    title: {
        fontFamily: 'robotoBold',
        fontSize: 20,
    },
});
