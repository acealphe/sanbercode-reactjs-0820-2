import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <section style = {{border: '1px solid black', borderRadius: '5px', margin: '25px 25px 25px 25px', padding: '25px 25px 25px 25px'}}>
        <h1 style ={{font:'bold', textAlign:'center'}}>
            Form Pembelian Buah
        </h1>
        <h4>
            <table>
                <tr>
                    <td>
                        <label for='nama'>Nama Pelanggan</label>
                    </td>
                    <td>
                        <form><input type='text' id='fname' name='fname'/></form>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label for='item'>Daftar Item</label><br/>
                    </td>
                    <td>
                        <form>
                            <input type='checkbox' id='item' name='buah1' value='semangka'/>
                            <label for='buah1'> Semangka</label><br/>
                            <input type='checkbox' id='item' name='buah2' value='jeruk'/>
                            <label for='buah2'> Jeruk</label><br/>
                            <input type='checkbox' id='item' name='buah3' value='nanas'/>
                            <label for='buah3'> Nanas</label><br/>
                            <input type='checkbox' id='item' name='buah4' value='salak'/>
                            <label for='buah4'> Salak</label><br/>
                            <input type='checkbox' id='item' name='buah5' value='anggur'/>
                            <label for='buah5'> Anggur</label><br/>
                        </form>
                    </td>
                </tr>
                <tr>
                    <td>
                        <button style={{borderRadius:'5px'}} name='kirim' type='submit' value=''>Kirim</button><br/>
                    </td>
                </tr>
            </table>
        </h4>
    </section>
  );
}

export default App;
