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
            plugins: [
               'a11ychecker',
               'advlist',
               'advcode',
               'advtable',
               'autolink',
               'checklist',
               'export',
                'lists',
                'link',
                'image',
                'charmap',
                'preview',
                'anchor',
                'searchreplace',
                'visualblocks',               
                'powerpaste',
                'fullscreen',
                'formatpainter',
                'insertdatetime',
                'media',
                'table',
                'help',
                'wordcount',
            ],
            toolbar: 'undo redo | casechange blocks | bold italic backcolor | ' +
           'alignleft aligncenter alignright alignjustify | ' +
           'bullist numlist checklist outdent indent | removeformat | a11ycheck code table help',
            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
        onEditorChange={onChange}
      />
        )}

        />
    </div>
  )
}

