import Head from "next/head";
import { useForm, Controller } from "react-hook-form";
import { Footer } from "../components/Footer";
import { Input } from "../components/Input";
import styles from "../styles/Contato.module.scss";

export default function Contato() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {
    alert(JSON.stringify(formData));
  };

  const beforeMaskedStateChange = (states) => {
    console.log(states);
    let { value } = states.currentState;

    const newValue = value.replace(/[^0-9]/g, "");
    if (newValue.length < 10) {
      return states.nextState;
    }

    if (newValue.length === 10) {
      value = newValue.replace(/^(\d{2})(\d{4})(\d{4})$/, "($1) $2-$3");
    } else if (newValue.length > 10) {
      value = newValue.replace(/^(\d{2})(\d{5})(\d{4})(\d*)$/, "($1) $2-$3");
    }

    return {
      value: value,
      selection: {
        start: value.length,
        end: value.length,
      },
    };
  };

  // https://formsubmit.co/documentation

  return (
    <>
      <Head>
        <title>Contato | Quality Systems</title>
        <meta
          name="description"
          content="Desde a sua fundação em 1990, a Quality Systems vem oferecendo soluções inovadoras para gestão e automação de clubes, agremiações, sindicatos e academias."
        />
      </Head>

      <main className={styles.container}>
        <section className={styles.wrapper}>
          <h2>Contato</h2>
          <div className={styles.content}>
            <div className={styles.form}>
              <h3>Enviar mensagem:</h3>

              {/* UTILIZAR O YUP PARA VALIDAÇÃO https://react-hook-form.com/get-started/#SchemaValidation */}

              <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                  name="assunto"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Input
                      {...field}
                      type="text"
                      label="Assunto:"
                      error={errors.assunto}
                    />
                  )}
                />
                <Controller
                  name="nome"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Input
                      {...field}
                      type="text"
                      label="Nome:"
                      error={errors.nome}
                    />
                  )}
                />
                <Controller
                  name="pais"
                  control={control}
                  rules={{ required: true }}
                  defaultValue="Brasil"
                  render={({ field }) => (
                    <Input
                      {...field}
                      type="text"
                      label="País:"
                      error={errors.pais}
                    />
                  )}
                />
                <Controller
                  name="estado"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Input
                      {...field}
                      type="text"
                      label="Estado:"
                      error={errors.estado}
                    />
                  )}
                />
                <Controller
                  name="cidade"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Input
                      {...field}
                      type="text"
                      label="Cidade:"
                      error={errors.cidade}
                    />
                  )}
                />
                <Controller
                  name="email"
                  control={control}
                  rules={{
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  }}
                  render={({ field }) => (
                    <Input
                      {...field}
                      type="text"
                      label="E-mail:"
                      error={errors.email}
                    />
                  )}
                />
                <Controller
                  name="telefone"
                  control={control}
                  defaultValue=""
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Input
                      {...field}
                      type="tel"
                      label="Telefone:"
                      error={errors.telefone}
                    />
                  )}
                />
                <Controller
                  name="mensagem"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Input
                      {...field}
                      type="textarea"
                      label="Mensagem:"
                      error={errors.mensagem}
                    />
                  )}
                />
                <button type="submit">Enviar contato</button>
              </form>
            </div>
            <div className={styles.contact}>
              <h3>Endereço</h3>
              <p>
                <strong>Quality Systems LTDA</strong>
              </p>
              <p>Rua Carajás, 604, Lídice</p>
              <p>Uberlândia - MG</p>
              <p>CEP: 38400-076</p>
              <p>
                Telefone: <a href="tel:3432924700">(34) 3292-4700</a>
              </p>
              <br />
              <h3>Horário Comercial</h3>
              <p>
                <strong>Segunda à Sexta:</strong> 08:00 à 18:00
              </p>
              <p>
                <strong>Sábado:</strong> 08:00 ao 12:00
              </p>
              <p>
                <strong>Domingo:</strong> Fechado
              </p>
            </div>
          </div>

          <div className={styles.map}>
            <img src="/images/map-placeholder.png" alt="Mapa temporário" />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
