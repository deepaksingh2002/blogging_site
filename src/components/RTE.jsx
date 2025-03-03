import React from 'react';
import {Editor } from '@tinymce/tinymce-react';
import { Controller } from 'react-hook-form';


export default function RTE({name, control, labal, defaultValue ="" }) {
  return (
    <div className='w-full'>
     {labal && <labal className="inline-block mb-1 pl-1"> 
        {labal} </labal>}

        <Controller 
        name={name || "content"}
        control={control}
        render = {({field : {onChange}}) => (
             <Editor  
             apiKey='9q48r6ahvenb49j1wup9j08pauaumik7zjyfaod3z7ifldge'
      initialValue={defaultValue}
      init={
        {
            initialValue: defaultValue,
            height: 500,
            menubar: true,
            plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount',
            toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat',
            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
        onEditorChange={onChange}
      />
        )}

        />
    </div>
  )
}

