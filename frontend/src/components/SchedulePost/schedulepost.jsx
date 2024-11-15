import { useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Modal from "../Modal/modal";
import Icon from "../icon/icon";


const SchedulePost = () => {
    const [visibleModal, setVisibleModal] = useState(false);

    const [startDate, setStartDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState(new Date());

    const isPastDate = (date) => {
        const today = new Date();
        return date < today;
    };

    const dayClassName = (date) => {
        return isPastDate(date) ? "past" : "";
    };

    let buttonRef = useRef(null);

    return (
        <>
            <button
                className="btn-stroke w-full mt-3"
                onClick={() => setVisibleModal(true)}
            >
                <span>Schedule post</span>
                <Icon name="calendar-plus" />
            </button>
            <Modal
                classWrap="p-8 pt-10 md:p-5 md:pt-7"
                classButtonClose="top-8 right-8 md:top-5 md:right-3"
                visible={visibleModal}
                onClose={() => setVisibleModal(false)}
                initialFocus={buttonRef}
            >
                <div className="mb-9 text-h6 md:mb-6">Schedule post</div>
                <div className="p-6 bg-n-2 rounded-xl text-n-4 md:p-4 dark:bg-n-7">
                    Designers, it’s time to level up! 🤩 I just used Google Bard
                    AI assistant and Cinema 4D/Redshift render to create a
                    stunning hero header concept. Check it out and see how AI
                    tech can be used to help you level up your designs! 📈{" "}
                    <span className="text-primary-3 dark:text-primary-4">
                        #design #ai #cinema4d #redshift
                    </span>
                </div>
                <div className="flex mt-6 space-x-4 md:block md:space-x-0">
                    <div className="flex-1 md:mb-4">
                        <div className="mb-2 text-small">Choose date</div>
                        <div className="relative">
                            <DatePicker
                                className="w-full h-12 pl-12 border border-n-3 bg-transparent rounded-xl font-inter text-base-2 text-n-7 outline-none transition-colors focus:border-primary-3 dark:text-n-1 dark:border-n-5 dark:focus:border-primary-4"
                                wrapperClassName="react-datepicker-wrapper-custom"
                                dateFormat="MMMM dd, yyyy"
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                formatWeekDay={(nameOfDay) =>
                                    nameOfDay.toString().slice(0, 1)
                                }
                                dayClassName={dayClassName}
                            />
                            <Icon
                                className="absolute top-3.5 left-4 fill-n-4 pointer-events-none"
                                name="calendar-check"
                            />
                        </div>
                    </div>
                    <div className="basis-1/2">
                        <div className="mb-2 text-small">Choose time</div>
                        <div className="relative">
                            <DatePicker
                                className="w-full h-12 pl-12 border border-n-3 bg-transparent rounded-xl font-inter text-base-2 text-n-7 outline-none transition-colors focus:border-primary-3 dark:text-n-1 dark:border-n-5 dark:focus:border-primary-4"
                                wrapperClassName="react-datepicker-wrapper-custom"
                                selected={selectedTime}
                                onChange={(time) => setSelectedTime(time)}
                                showTimeSelect
                                showTimeSelectOnly
                                timeIntervals={30}
                                dateFormat="h:mm aa"
                            />
                            <Icon
                                className="absolute top-3.5 left-4 fill-n-4 pointer-events-none"
                                name="clock"
                            />
                        </div>
                    </div>
                </div>
                <button
                    className="btn-gradient btn-medium mt-6 md:w-full"
                    ref={buttonRef}
                >
                    Schedule
                </button>
            </Modal>
        </>
    );
};

export default SchedulePost;
