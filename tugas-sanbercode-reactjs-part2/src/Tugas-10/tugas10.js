import React from 'react';
import styled from 'styled-components';

let dataHargaBuah = [
    {nama: "Semangka", harga: 10000, berat: 1000},
    {nama: "Anggur", harga: 40000, berat: 500},
    {nama: "Strawberry", harga: 30000, berat: 400},
    {nama: "Jeruk", harga: 30000, berat: 1000},
    {nama: "Mangga", harga: 30000, berat: 500}
  ];

const Tr = styled.tr`
  border: 1px solid white;
`;
const Th = styled.th`
  border: 1px solid white;
  background-color: grey;
`;
const Td = styled.td`
    border: 1px solid white;
    background-color: orange;
`;

class Item extends React.Component {
    render() {
        return <td>{this.props.nama}</td>;
    }
}
class Harga extends React.Component {
    render() {
        return <td>{this.props.harga}</td>;
    }
}
class Berat extends React.Component {
    render() {
        return <td>{this.props.berat/1000} kg</td>;
    }
}

class Tugas10 extends React.Component {
    render() {
      return (
          <section>
              <h1 style={{font:'bold', textAlign:'center'}}>
                    Tabel Harga Buah
              </h1>
              <h4>
                    <table style={{border: '1px solid black', width: '95%', marginLeft: 'auto', marginRight: 'auto'}}>
                        <Tr>
                            <Th>Nama</Th>
                            <Th>Harga</Th>
                            <Th>Berat</Th>
                        </Tr>
                        {dataHargaBuah.map(el=> {return (
                        <Tr>
                            <Td><Item nama={el.nama}/></Td>
                            <Td><Harga harga={el.harga}/></Td>
                            <Td><Berat berat={el.berat}/></Td>
                        </Tr>
                            )}
                        )}
                  </table>
              </h4>
          </section>
      );
    }
}

export default Tugas10