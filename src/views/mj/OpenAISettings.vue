<template>
  <div>
    <h1>OpenAI Settings</h1>
    <form @submit.prevent="submitSettings">
      <label for="api_key">API Key:</label>
      <input type="text" id="api_key" v-model="apiKey" placeholder="Enter your API key here">
      <button type="button" @click="pasteApiKey">Paste API Key</button>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import { openaiSetting } from './path/to/your/openaiSetting';

export default {
  data() {
    return {
      apiKey: ''
    };
  },
  methods: {
    async pasteApiKey() {
      try {
        const text = await navigator.clipboard.readText();
        this.apiKey = text;
        alert('API key pasted successfully!');
      } catch (err) {
        console.error('Failed to read clipboard contents: ', err);
        alert('Failed to paste API key. Please try again.');
      }
    },
    submitSettings() {
      const q = { settings: JSON.stringify({ key: this.apiKey }) };
      openaiSetting(q, {
        success: (message) => {
          alert(message);
        }
      });
    }
  }
};
</script>
