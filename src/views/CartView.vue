<script setup>
import {
  TruckIcon,
  ShieldCheckIcon,
  CreditCardIcon,
  ClockIcon,
} from "@heroicons/vue/24/outline";
import { cart } from "@/stores/cart";
</script>

<template>
  <section class="max-w-6xl mx-auto px-6 py-16 mt-8 min-h-[80vh]">
    <h1 class="text-3xl font-bold mb-8">Shopping Cart</h1>

    <div v-if="cart.state.items.length" class="grid md:grid-cols-3 gap-10">
      <!-- Items -->
      <div class="md:col-span-2 flex flex-col gap-4">
        <div
          v-for="item in cart.state.items"
          :key="item.id"
          class="grid grid-cols-4 items-center gap-4 rounded-xl p-4 bg-white shadow-sm ring-1 ring-gray-100"
        >
          <img :src="item.image" class="w-20 h-20 object-cover rounded" />

          <div class="col-span-2">
            <p class="font-semibold">{{ item.name }}</p>
            <p class="text-sm text-gray-500">Rp {{ cart.formatPrice(item.price) }}</p>
          </div>

          <div class="flex items-center gap-3">

             <button
              @click="cart.decrease(item.id)"
              class="grid w-10 aspect-square place-items-center rounded-full border border-gray-200 text-white bg-gray-400 hover:bg-gray-50"
            >
              -
            </button>

            <span class="min-w-6 text-center font-medium">{{ item.qty }}</span>

            <button
              @click="cart.add(item)"
              class="grid w-10 aspect-square place-items-center rounded-full border border-gray-200 text-white bg-gray-400 hover:bg-gray-50"
            >
              +
            </button>


            <button
              @click="cart.remove(item.id)"
              class="text-white text-sm px-2  rounded-sm aspect-video  bg-red-600"
            >
              Hapus
            </button>
          </div>
        </div>
      </div>

      <!-- Summary -->
      <div
        class="bg-white/70 backdrop-blur rounded-2xl p-6 h-fit sticky top-20 space-y-6 shadow-sm ring-1 ring-gray-100"
      >
        <h2 class="font-semibold text-lg">Ringkasan Pesanan</h2>

        <div class="space-y-2 text-sm">
          <div class="flex justify-between text-gray-500">
            <span>Total Item</span>
            <span>{{ cart.totalItems }}</span>
          </div>

          <div class="flex justify-between text-gray-500">
            <span>Subtotal</span>
            <span>Rp {{ cart.totalPrice }}</span>
          </div>

          <div class="flex justify-between text-gray-500">
            <span>Ongkir</span>
            <span class="text-green-600 font-medium">Gratis</span>
          </div>

          <div
            class="border-t border-gray-100 pt-3 flex justify-between font-semibold text-lg"
          >
            <span>Total</span>
            <span>Rp {{ cart.totalPrice }}</span>
          </div>
        </div>

        <!-- Trust Badges -->
        <div class="space-y-3 text-sm text-gray-600">
          <div class="flex items-center gap-3">
            <TruckIcon class="w-5 h-5 text-blue-600" />
            <span>Gratis ongkir seluruh Indonesia</span>
          </div>

          <div class="flex items-center gap-3">
            <ClockIcon class="w-5 h-5 text-blue-600" />
            <span>Garansi tiba sebelum 3-5 hari</span>
          </div>

          <div class="flex items-center gap-3">
            <ShieldCheckIcon class="w-5 h-5 text-blue-600" />
            <span>Jaminan kualitas & pengembalian mudah</span>
          </div>

          <div class="flex items-center gap-3">
            <CreditCardIcon class="w-5 h-5 text-blue-600" />
            <span>Mendukung berbagai metode pembayaran</span>
          </div>
        </div>

        <button
          class="w-full bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition"
        >
          Checkout Sekarang
        </button>

        <p class="text-xs text-gray-400 text-center">Transaksi aman & terenkripsi.</p>
      </div>
    </div>

    <!-- Keranjang kosong -->
    <p v-else class="text-gray-500">Keranjang masih kosong.</p>
  </section>
</template>
