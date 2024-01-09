<template>
  <div class="bg-black">
    <BannersCategoryBanner
      :backgroundImage="pageData.page?.background_image?.original_url"
      :blur="
        pageData.page?.background_image?.responsive_images
          .media_library_original?.base64svg
      "
    />

    <div
      class="max-w-6xl px-6 pt-40 m-auto pb-40 flex flex-col md:flex-row bg-black text-white items-stretch"
    >
      <div class="md:w-1/2 space-y-8 flex flex-col h-full">
        <div class="space-y-2">
          <h1
            class="lg:text-[80px] text-5xl text-white font-avenir font-bold pb-4"
          >
            Contactanos
          </h1>
          <p class="text-gray-400 font-avenir">
            Envianos un mensaje y nos pondremos en contacto contigo.
          </p>
        </div>
        <div class="space-y-4 flex-grow">
          <div class="space-y-2">
            <label
              class="text-sm font-avenir font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-400"
              for="name"
              >Nombre</label
            ><input
              v-model="name"
              class="flex h-10 w-full font-avenir rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-gray-800 text-white"
              id="name"
              placeholder="Ingrese su nombre"
              type="text"
              required
            />
          </div>
          <div class="space-y-2">
            <label
              class="text-sm font-avenir font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-400"
              for="email"
              >Email</label
            ><input
              class="flex font-avenir h-10 w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-gray-800 text-white"
              id="email"
              placeholder="Ingrese su email"
              type="email"
              v-model="email"
              @blur="validateEmail(email)"
              required
            />
          </div>
          <div class="space-y-2">
            <label
              class="text-sm font-avenir font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-400"
              for="message"
              >Mensaje</label
            ><textarea
              class="flex font-avenir w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[100px] bg-gray-800 text-white"
              id="message"
              placeholder="Ingrese el mensaje"
              v-model="message"
              required
            ></textarea>
          </div>
          <button
            @click="handleSubmit"
            class="inline-flex font-avenir items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-white text-black border-white border-2 hover:!bg-black hover:text-white duration-200"
          >
            <span v-if="loading" class="loading loading-spinner"></span>

            Enviar mensaje
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import PAGE_QUERY from '@/graphql/Queries/pages/getPage.query.graphql';
import SEND_EMAIL_MUTATION from '@/graphql/Mutations/sendEmail.mutation.graphql';
const toast = useToast();

import { Page } from '~/ts/types/page.types';

const name = ref('');
const email = ref('');
const message = ref('');

const { data: pageData, error } = await useAsyncQuery<{ page?: Page }>(
  PAGE_QUERY,
  {
    slug: 'contacto',
  },
);
const { mutate, loading, error: mutationError } = useMutation(
  SEND_EMAIL_MUTATION,
);

const inputError = reactive({
  email: '',
});

async function handleSubmit() {
  try {
    await mutate({
      name: name.value,
      email: email.value,
      message: message.value,
    });
    toast.add({
      color: 'gray',
      title: 'Mensaje enviado',
    });
    name.value = '';
    email.value = '';
    message.value = '';
  } catch (error) {
    console.log(error);
    toast.add({
      color: 'red',
      title: 'Error al enviar el mensaje',
    });
  }
}

function validateEmail(email: string) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    inputError['email'] = 'Please enter a valid email address';
  } else {
    inputError['email'] = '';
  }
}

useHead({
  title: 'Contacto - Revista Phantasma',
  meta: [
    {
      content:
        'Contáctanos, espacio creativo y crítico. Colabora con Phantasma',
    },
  ],
});
</script>
