import React from 'react';
import Select from 'react-select';
import Button from '@/common/components/Button';
import { CHECKBOT_OPTIONS } from '../constant';

const CheckBotForm = () => {
    return (
        <form onSubmit={() => {}}>
            <Select placeholder="What can I help you with?" options={CHECKBOT_OPTIONS} />
            <textarea name="target_text" id="target_text_textarea" cols={30} rows={10} />
            <Button type='submit' title='Submit' />
        </form>
    )
};

export default CheckBotForm;