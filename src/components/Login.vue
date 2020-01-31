<template>
    <main>
        <div class="container px-4 my-4 text-center">
            <h1>Accedi ai servizi di Service Provider</h1>
            <p class="text-400">Seleziona la modalità di accesso che preferisci</p>
        </div>
        <section id="head-section">
            <div class="container my-5 d-none d-sm-block">
                <div class="row d-flex justify-content-center p-3">
                    <div class="col-5 my-4 p-4">
                        <img width="15%"
                             src="data:image/png;base64,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"
                             alt="Spid-icon">
                        <p class="text-justify text-300">
                            SPID è il sistema unico di accesso ai servizi online della Pubblica Amministrazione. Se hai
                            già un'identità digitale SPID,
                            accedi con le tue credenziali. Se non hai ancora SPID, richiedilo ad uno dei gestori.
                        </p>
                        <a class="btn btn-primary w-75 my-1" @click="login">
                            <img width="10%"
                                 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEX///8AZswAXcoAWckAW8kAYssAX8oAV8gAY8v3+/4AVsju9Pvb5/bl7vnq8fqyyeu7z+54ot7y9/w3e9JTiteuxOlum9zB0+8Aac0mc9B9pd/G1/DV4PNJhdXN3PK80O6QseOlvedZj9hBgNSauOaHrOEbb89jk9kseNIAUcfwqvShAAAEEUlEQVR4nO3ci3aiMBAGYEggAW8oFtFaBZVa+/4vuFB113ZVcuk5YTj/9wQzJ5B7xvMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAkXS8TrJdVWVJMRq6DubXpdPZKuRBwJhgNc6W+93YdVC/J84OkonI/yZk8lT1oynTd8F+ZHcRMb7oQUOWTNxN70zIWew6Qjv5kj3J7ytHkbgO0sZM3v8+v+EL12EaS09tDXjGTkS/1MkyVEqw7lePJDvV1Ff4Qi+iKHUdrr54pdqC51ak96Eeng0Sd1I8uA5Y10Ktk/mHvboOWU/CNRP0fZm7DlrHMNBOsP5QKf2Ke51e5krMXIetbi0NEvT9wch14Mrm6iPhrXDvOnBVa/1u5oxTacSNyV/YEETm4OOBYYJ1I9LoTku92cwtlrkOXsnJrJ9phC+ug1cxMe1nGoLCZ5rozkhv8a3r8BXMzH/Dug1L1+ErMBzuz8IP1+ErsPkN/ejoOvx2qdmc9GrgOv52I6s29Hn396S2lhl2f2qamyx+bzJ8c51Aq8JmOPT9YO06gVa5XYas+7s1a7uvNOh+hm92PU3Q/Wmb7WjR/Z5maDfiSwKHwnZtSGBO461sZt6+7zp8BQvTfagGiUX+zmZAJLE+HNl0NQSGw9rSIkNG4izYYhsj2rgOXonF+onIfql3NB4vJIXNxFpl2puGRM4tvNh0RCSwwL8wbEQ654f1gGH0J0oyTeh5hcmoT+kc3/M+9MfEaOk6aC2xxqW2C9n91f032kt9XroOWVehlyKjcCTzQ6JznC/IXdxrJOodqji5DtZMMVDsbhiNJcUdb77SoEH4KrsXv7T3N6EksmR6IPGfz1EjuZm4jtFSXLIHj4Ka/Pip+2dN7eLqyO/9j5GQGxIbTyrWM58zEf5tyygUQbAqCezgaxhls5eVGHDOpfRX+zLv/oG9kXgyHPY0NQAAAACAjoiH22mSVbskycckjuu1xPnrPOKcfQkCLo4fWZ9Wh8lGBj+qt0Q9qt4Sl+HD6i1BH6q3VOzZZpuQr0QuJzyyPrZdGRbR1HWQNpSqt0i6W97xXLF6y5zol6pTvYXk+DgJ1Q+6w4jguJFq3TiJCLbiSe9iVDh3HbAu7esmjNRtGs/b6V8ZkqTGxXHvq7cY1Y2gUjOikZvdEiZUvcWwqgKJxxZfDJuQ0A3ag+k9byq3oEe9r97ybv7eIqBR6dPi8RqNvmZs8wCRxKif9b96i837Q1a5Dl+BRRElItVbrF46U6jeYvmWm8BLZ9v3+N2/i7m1rG3S/alp0fvqLdPPoMbvCK7Y9ZCN/Ud8dv9GbTy5GtdGjbfatrGu5XleFMV0Ok0aWZKd7WpVrez+VwoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEDcH2D2NY8Y79WBAAAAAElFTkSuQmCC"
                                 class="rounded-circle icon-white" alt="Spid-icon2">
                            <span class="text text-white">&nbsp;&nbsp;Entra con SPID</span>
                        </a>
                        <p class="small text-300">Non hai SPID? <b>Scopri di piu.</b></p>
                    </div>
                </div>
            </div>
            <div class="d-block d-sm-none px-4">
                <img width="15%"
                     src="data:image/png;base64,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"
                     alt="Spid-icon">
                <p class="text-justify text-300">
                    SPID è il sistema unico di accesso ai servizi online della Pubblica Amministrazione. Se hai già
                    un'identità digitale SPID,
                    accedi con le tue credenziali. Se non hai ancora SPID, richiedilo ad uno dei gestori.
                </p>
                <a class="btn btn-primary my-1 w-100" @click="login">
                    <img width="10%"
                         src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEX///8AZswAXcoAWckAW8kAYssAX8oAV8gAY8v3+/4AVsju9Pvb5/bl7vnq8fqyyeu7z+54ot7y9/w3e9JTiteuxOlum9zB0+8Aac0mc9B9pd/G1/DV4PNJhdXN3PK80O6QseOlvedZj9hBgNSauOaHrOEbb89jk9kseNIAUcfwqvShAAAEEUlEQVR4nO3ci3aiMBAGYEggAW8oFtFaBZVa+/4vuFB113ZVcuk5YTj/9wQzJ5B7xvMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAkXS8TrJdVWVJMRq6DubXpdPZKuRBwJhgNc6W+93YdVC/J84OkonI/yZk8lT1oynTd8F+ZHcRMb7oQUOWTNxN70zIWew6Qjv5kj3J7ytHkbgO0sZM3v8+v+EL12EaS09tDXjGTkS/1MkyVEqw7lePJDvV1Ff4Qi+iKHUdrr54pdqC51ak96Eeng0Sd1I8uA5Y10Ktk/mHvboOWU/CNRP0fZm7DlrHMNBOsP5QKf2Ke51e5krMXIetbi0NEvT9wch14Mrm6iPhrXDvOnBVa/1u5oxTacSNyV/YEETm4OOBYYJ1I9LoTku92cwtlrkOXsnJrJ9phC+ug1cxMe1nGoLCZ5rozkhv8a3r8BXMzH/Dug1L1+ErMBzuz8IP1+ErsPkN/ejoOvx2qdmc9GrgOv52I6s29Hn396S2lhl2f2qamyx+bzJ8c51Aq8JmOPT9YO06gVa5XYas+7s1a7uvNOh+hm92PU3Q/Wmb7WjR/Z5maDfiSwKHwnZtSGBO461sZt6+7zp8BQvTfagGiUX+zmZAJLE+HNl0NQSGw9rSIkNG4izYYhsj2rgOXonF+onIfql3NB4vJIXNxFpl2puGRM4tvNh0RCSwwL8wbEQ654f1gGH0J0oyTeh5hcmoT+kc3/M+9MfEaOk6aC2xxqW2C9n91f032kt9XroOWVehlyKjcCTzQ6JznC/IXdxrJOodqji5DtZMMVDsbhiNJcUdb77SoEH4KrsXv7T3N6EksmR6IPGfz1EjuZm4jtFSXLIHj4Ka/Pip+2dN7eLqyO/9j5GQGxIbTyrWM58zEf5tyygUQbAqCezgaxhls5eVGHDOpfRX+zLv/oG9kXgyHPY0NQAAAACAjoiH22mSVbskycckjuu1xPnrPOKcfQkCLo4fWZ9Wh8lGBj+qt0Q9qt4Sl+HD6i1BH6q3VOzZZpuQr0QuJzyyPrZdGRbR1HWQNpSqt0i6W97xXLF6y5zol6pTvYXk+DgJ1Q+6w4jguJFq3TiJCLbiSe9iVDh3HbAu7esmjNRtGs/b6V8ZkqTGxXHvq7cY1Y2gUjOikZvdEiZUvcWwqgKJxxZfDJuQ0A3ag+k9byq3oEe9r97ybv7eIqBR6dPi8RqNvmZs8wCRxKif9b96i837Q1a5Dl+BRRElItVbrF46U6jeYvmWm8BLZ9v3+N2/i7m1rG3S/alp0fvqLdPPoMbvCK7Y9ZCN/Ud8dv9GbTy5GtdGjbfatrGu5XleFMV0Ok0aWZKd7WpVrez+VwoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEDcH2D2NY8Y79WBAAAAAElFTkSuQmCC"
                         class="rounded-circle icon-white" alt="Spid-icon2">
                    <span class="text text-white">&nbsp;&nbsp;Entra con SPID</span>
                </a>
                <p class="small text-300">Non hai SPID? <b>Scopri di piu.</b></p>
            </div>

        </section>
    </main>

</template>

<script>
  import {app} from '../main.js';

  export default {
    name: 'Login',
    data() {
      return {
        user: this.user,
      };
    },
    beforeMount() {
      if (this.$store.getters.user) {
        this.user = this.$store.getters.user;
      }
    },
    mounted() {
      // eslint-disable-next-line no-console
      console.log(this.$store.getters.user);
    },
    methods: {
      login: function() {
        this.user = {
          'nome': 'ADELE',
          'cognome': 'ZANELLA',
          'datanascita': '13/09/2014',
          'sesso': 'F',
          'nazione': 'I',
          'nazionalita': 'ITALIANA',
          'nazionalita_maschile': 'ITALIANO',
          'stato': 'ITALIA',
          'provincia': 'TN',
          'citta': 'TRENTO',
          'cap': '38100',
          'localita': 'TRENTO',
          'codiceVia': '7775',
          'indirizzo': 'VIA DELLE CESE LONGHE',
          'numeroCivico': '7',
          'barra': '',
          'email': '',
          'codiceFiscale': 'ZNLDLA14P53L378G',
          'codiceFamiglia': '2001370',
          'numeroPersoneFamiglia': '4',
          'codiceComuneNascita': '22205',
          'comuneNascita': 'TRENTO',
          'madre': 'CERANELLI ALESSANDRA',
          'padre': 'ZANELLA NICOLA',
          'grado': '3',
          'grado_descrizione': 'FIGLIA',
          'matricola': '2059671',
        };
        this.$store.commit('SET_USER', this.user);
        app.$emit('loginEvent', this.user);
        this.$router.push('/');
      },
    },
  };
</script>

<style scoped>

</style>
