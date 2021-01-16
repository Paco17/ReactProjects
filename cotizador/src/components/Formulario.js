import React from 'react';

const Formulario = () => {
    return(
        <form>
            <div>
                <label>Marca: </label>
                <select>
                    <option value = "Ford">Ford</option>
                    <option value = "Ferrari">Ferrari</option>
                    <option value = "BMW">BMW</option>
                    <option value = "Toyota">Toyota</option>
                    <option value = "Mercedes">Mercedes</option>
                    <option value = "Chevrolet">Chevrolet</option>
                </select>
            </div>


            <div>
                <label>Año: </label>
                <select>
                    <option value = "2021">2021</option>
                    <option value = "2020">2020</option>
                    <option value = "2019">2019</option>
                    <option value = "2018">2018</option>
                    <option value = "2017">2017</option>
                    <option value = "2016">2016</option>
                    <option value = "2015">2015</option>
                    <option value = "2014">2014</option>
                    <option value = "2013">2013</option>
                    <option value = "2012">2012</option>
                </select>
            </div>

            <div>
                <label>Nuevo o Semi</label>
                <input
                    type="radio"
                    name="nuevo"
                    value="Nuevo"
                /> Nuevo

                <input
                    type="radio"
                    name="nuevo"
                    value="Seminuevo"
                /> Seminuevos
            </div>



        </form>
    );
}

export default Formulario;