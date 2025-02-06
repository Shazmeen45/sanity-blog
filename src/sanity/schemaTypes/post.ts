import { defineType, defineField, defineArrayMember } from 'sanity';

export default defineType({
    name: "post",
    title: "Post",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "PostTitle",
            type: "string",
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96,
            },
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: "summary",
            title: "Summary",
            type: "text",
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: "image",
            title: "Image",
            type: "image",
            options: {hotspot: true},
        }),
        defineField({
            name: "content",
            title: "Content",
            type: "array",
            of: [
                defineArrayMember(
                    {type: "block"},
                ),
                defineArrayMember(
                    {type: "image"},
                ),
            ],
        }),
        defineField({
            name: "author",
            title: "Author",
            type: "string",
        }),
        defineField({
            name: "date",
            title: "Date",
            type: "date",
        }),
    ]
})
