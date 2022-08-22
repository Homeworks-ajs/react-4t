import React, { useState } from 'react'
import shortid from 'shortid';
import InputList from '../input-list/InputList'
import ShowList from '../show-list/ShowList'

function ListWrapper() {
    const [dataList, setDataList] = useState([]);

    const onAppend = evt => {
        evt.preventDefault();
        const [date, progress] = evt.target.form;
        const progressValue = progress.valueAsNumber;

        const newData = {
            date: date.valueAsNumber,
            progress: (!dataList.length)
                ? progressValue 
                : dataList.reduce((a, b) => a + b.progress, 0) + progressValue,
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
