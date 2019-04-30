import { Injectable } from '@nestjs/common';
import { Entry } from './Entry';
import { stringify } from 'querystring';

let entries: Entry[] = [
    {
        _id: '1',
        title: 'Praesent ante massa',
        body: 'Praesent ante massa, vulputate placerat mauris non, lobortis euismod dui.'
    },
    {
        _id: '2',
        title: 'Sed a magna ',
        body: 'Sed a magna id sem suscipit semper. Duis ut fringilla nunc. '
    },
    {
        _id: '3',
        title: 'Aenean malesuada lorem',
        body: 'Aenean malesuada lorem quis nunc tincidunt, ut vehicula nunc tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
    },
    {
        _id: '4',
        title: 'Donec euismod aliquam',
        body: 'Donec euismod aliquam mauris sit amet fringilla. Quisque ultricies dolor augue, vitae mattis nisi fermentum at. '
    }
];


@Injectable()
export class EntryService {

    // this method retrieves all entries
    findAll() {
        return entries;
    }
    
    // this method retrieves only one entry, by entry ID
    findById(id: string) {

        function search(id){
            for (let index=0; index < entries.length; index++) {
                if (entries[index]._id === id) {
                    return index;
                }
            }
            return -1;
        }

        const index = search(id);

        if (index>-1) {
            return entries[index];
        } else  {
            return null;
        }
    }

    create(entry: Entry) {        
        const newId = entries.length + 1;
        
        const newEntry = {
            _id: newId.toString(),
            title: entry.title,
            body: entry.body
        }
        
        entries.push(newEntry);

        return newEntry;
    }
}
