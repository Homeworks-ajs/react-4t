import React, { useState } from 'react'
import shortid from 'shortid';
import InputList from '../input-list/InputList'
import ShowList from '../show-list/ShowList'

function ListWrapper() {
    const [dataList, setDataList] = useState([]);

    const onAppend = evt => {
        evt.preventDefault();
        const [date, progress] = evt.target.form;

        const valueOfNewDate = new Date(date.valueAsNumber).valueOf();

        const newData = {
            date: valueOfNewDate,
            progress: dataList
                .filter(el => el.date === valueOfNewDate)
                .reduce((a, b) => a + b.progress, 0) + progress.valueAsNumber,
            id: shortid.generate()
        }

        setDataList([...dataList, newData].sort((a, b) => a.date < b.date));
    }

    const onRemove = evt => {
        const dataID = evt.target.dataset.id;
        setDataList(dataList.filter(el => el.id !== dataID))
    }

    return (
        <div className="row d-flex justify-content-center">
            <div className="col-8">
                <InputList onAppend={onAppend} />
                <ShowList list={dataList} onRemove={onRemove} />
            </div>
        </div>
    )
}

export default ListWrapper
