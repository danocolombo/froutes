import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { startOfDay, parseISO, format } from 'date-fns';
import { SafeAreaView } from 'react-native-safe-area-context';

type RouteParams = {
    date?: string;
};

const TestScreen: React.FC = () => {
    const { date } = useLocalSearchParams<RouteParams>();
    const [selectedDate, setSelectedDate] = useState<Date>(() => {
        if (date) {
            // Parse the passed date string and set it to start of day
            return startOfDay(parseISO(date));
            // return startOfDay(parse(date, 'yyyy-MM-dd', new Date()));
        } else {
            // If no date is passed, use start of today
            return startOfDay(new Date());
        }
    });
    const [datePickerVisible, setDatePickerVisible] = useState<boolean>(false);

    const showDatePicker = (): void => {
        setDatePickerVisible(true);
    };

    const hideDatePicker = (): void => {
        setDatePickerVisible(false);
    };

    const handleConfirm = (date: Date): void => {
        const newDate = startOfDay(date);
        setSelectedDate(newDate);

        const dateString = format(newDate, 'yyyy-MM-dd');
        console.log('new date string value:', dateString);

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
                <Text style={{ textAlign: 'center', padding: 30 }}>
                    The date value is passed in params from main index page
                </Text>
                <Text
                    style={{
                        fontSize: 24,
                        fontWeight: 'bold',
                        marginBottom: 20,
                    }}
                >
                    {selectedDate
                        ? format(selectedDate, 'M/d/yyyy')
                        : 'No date selected'}
                </Text>
                <Button title='Change the date' onPress={showDatePicker} />
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
