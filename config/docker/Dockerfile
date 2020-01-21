FROM node:12.13.0

RUN apt-get install git dpkg dpkg-dev

# ENV VARIABLES
ENV GOSU_VERSION=1.10 \
    HOME=/app

# GOSU
WORKDIR $HOME
RUN chmod a+rwx $HOME

ENV GOSU_VERSION $GOSU_VERSION
RUN arch="$(dpkg --print-architecture | awk -F- '{ print $NF }')" \
    && echo $arch \
    && wget -O gosu "https://github.com/tianon/gosu/releases/download/1.10/gosu-$arch" \
    && mv ./gosu /usr/local/bin/gosu \
    && chmod +x /usr/local/bin/gosu

RUN git config --global user.name foody

COPY ./entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod a+x /usr/local/bin/entrypoint.sh
ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]

# YARN
RUN npm i -g yarn

# VOLUMES
VOLUME ["/app"]

# REACT APP PORT
EXPOSE 3000 1337

# COMMAND
CMD ["yarn"]
