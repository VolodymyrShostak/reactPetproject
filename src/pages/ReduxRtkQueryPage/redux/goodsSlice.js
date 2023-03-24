import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const goodsApi = createApi({
  reducerPath: 'goodsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6391c7c6b750c8d178cd152a.mockapi.io/api/',
  }),

  tagTypes: ['goods'],
  endpoints: builder => ({
    getGoods: builder.query({
      query: () => `goods/`,
      providesTags: result =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'goods', id })),
              { type: 'goods', id: 'LIST' },
            ]
          : [{ type: 'goods', id: 'LIST' }],
    }),

    addGood: builder.mutation({
      query: body => ({
        url: `goods/`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['goods'],
    }),

    deleteGood: builder.mutation({
      query: id => ({
        url: `goods/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['goods'],
    }),

    updateGood: builder.mutation({
      query: good => ({
        url: `goods/${good.id}`,
        method: 'PUT',
        body: good,
      }),
      invalidatesTags: ['goods'],
    }),
  }),
});

export const {
  useGetGoodsQuery,
  useAddGoodMutation,
  useDeleteGoodMutation,
  useUpdateGoodMutation,
} = goodsApi;
