# Formatted I/O, Line Input, Scanf - C

## read a file from stdin and put it to both stdout & stderr

    int main (int argc, char *argv[]){
    	char *fname = NULL;
    	if (argc>1){
    		frame=argv[1];
    	}
    	else{
    		return 1;
    	}
        FILE *file = fopen(fname, "r");

        int input;
        while((input=fgetc(file))!= EOF){
    	    fputc(input,stdout);
    	    fputc(input,stderr);
        }
    }

If reading a binary file, it is better to add "rb" flag for windows OS.

end of file `ctrl+D`

end program `ctrl_C`

stderr line buffer

stdout file buffer(???)

## re-reading

    void rewind(FILE *stream);

changing location of a file to the beginning

fseek: move to some location

## getting location

    long ftell(FILE * stream);
    off_t ftello(FILE *stream);

if is larger than a long in size, then:

    int fgetpos(FILE *restrict stream, fpos_t *restrict pos);
    int fsetpos(FILE *stream, const fpos_t *pos);

need to check man page for different systems

df: space of hard drive

file: blocks of pointers point to a chunk of data blocks of actual disk

## Format Printing

### printing to a string

    int sprintf(char *str, const char *format, /* args */ );

- return number of bytes that would have been written
- writes at most size-1 bytes (leave space for null byte)

### line based input

    char *fgets(char *str, int size, FILE *stream);

- stores in str
- stops at -n, EOF
- **do not use gets**

### scanf

    scanf("%d",&x);
    scanf("%s",str);

- read line using fgets(), parses data using sscanf() from line
- character ranges(check textbook)

### realloc

    void * realloc(void *ptr, size_t size);

- change previous allocated block ptr be changed to size size(larger or smaller & copy old data as needed)
- app: connect strings

### getline

    ssize_t getline(char ** linep, size_t *linecapp, FILE * stream);
    free(linep);

- dynamically allocated, but must free later
- not part of c standard

## Standard IO buffering

- unbuffered such as stderr
- line-buffered such as stdout
- block-buffered such as files

Could use `fflush(fp)` to flush the buffer to file ptr fp.

Could use `setbuf(fp, NULL)` to turn buffering off.
