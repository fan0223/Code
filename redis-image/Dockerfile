# Use an existing docker image as a base
FROM alpine
# Dowload and install a dependency
RUN apk add --update redis
#Tell the image to do when it starts as a container
CMD ["redis-server"]